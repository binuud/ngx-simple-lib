import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
  let pipe: SafePipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    sanitizer = jasmine.createSpyObj('DomSanitizer', [
      'bypassSecurityTrustHtml',
      'bypassSecurityTrustStyle',
      'bypassSecurityTrustScript',
      'bypassSecurityTrustUrl',
      'bypassSecurityTrustResourceUrl'
    ]);
    pipe = new SafePipe(sanitizer);
  });

  it('should trust HTML content', () => {
    const value = '<div></div>';
    const trustedHtml = {} as SafeHtml;
    (sanitizer.bypassSecurityTrustHtml as jasmine.Spy).and.returnValue(trustedHtml);

    const result = pipe.transform(value, 'html');
    expect(sanitizer.bypassSecurityTrustHtml).toHaveBeenCalledWith(value);
    expect(result).toBe(trustedHtml);
  });

  it('should trust Style content', () => {
    const value = 'color: red;';
    const trustedStyle = {} as SafeStyle;
    (sanitizer.bypassSecurityTrustStyle as jasmine.Spy).and.returnValue(trustedStyle);

    const result = pipe.transform(value, 'style');
    expect(sanitizer.bypassSecurityTrustStyle).toHaveBeenCalledWith(value);
    expect(result).toBe(trustedStyle);
  });

  it('should trust Script content', () => {
    const value = 'alert("test");';
    const trustedScript = {} as SafeScript;
    (sanitizer.bypassSecurityTrustScript as jasmine.Spy).and.returnValue(trustedScript);

    const result = pipe.transform(value, 'script');
    expect(sanitizer.bypassSecurityTrustScript).toHaveBeenCalledWith(value);
    expect(result).toBe(trustedScript);
  });

  it('should trust URL content', () => {
    const value = 'http://example.com';
    const trustedUrl = {} as SafeUrl;
    (sanitizer.bypassSecurityTrustUrl as jasmine.Spy).and.returnValue(trustedUrl);

    const result = pipe.transform(value, 'url');
    expect(sanitizer.bypassSecurityTrustUrl).toHaveBeenCalledWith(value);
    expect(result).toBe(trustedUrl);
  });

  it('should trust Resource URL content', () => {
    const value = 'http://example.com/resource';
    const trustedResourceUrl = {} as SafeResourceUrl;
    (sanitizer.bypassSecurityTrustResourceUrl as jasmine.Spy).and.returnValue(trustedResourceUrl);

    const result = pipe.transform(value, 'resourceUrl');
    expect(sanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(value);
    expect(result).toBe(trustedResourceUrl);
  });

  it('should throw error on invalid type', () => {
    const value = 'test';
    const invalidType = 'invalidType';

    expect(() => pipe.transform(value, invalidType)).toThrowError(`Invalid safe type specified: ${invalidType}`);
  });
  
});