import { AgoTimePipe } from './ago-time.pipe';

describe('AgoTimePipe', () => {
  
  let pipe: AgoTimePipe;

  beforeEach(() => {
    pipe = new AgoTimePipe();
  });

  it('create an instance', () => {
    const pipe = new AgoTimePipe();
    expect(pipe).toBeTruthy();
  });
    

  it('should return empty string if value is undefined', () => {
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should parse string input and return correct time ago', () => {
    const now = Math.floor(Date.now() / 1000);
    const fiveMinutesAgo = (now - 300).toString(); // 300 seconds = 5 minutes
    expect(pipe.transform(fiveMinutesAgo)).toBe('5 minutes ago');
  });

  it('should return singular for exactly 1 unit', () => {
    const now = Math.floor(Date.now() / 1000);
    const oneDayAgo = now - 86400; // 1 day = 86400 seconds
    expect(pipe.transform(oneDayAgo)).toBe('1 day ago');
  });

  it('should return plural for multiple units', () => {
    const now = Math.floor(Date.now() / 1000);
    const twoHoursAgo = now - 7200; // 2 hours = 7200 seconds
    expect(pipe.transform(twoHoursAgo)).toBe('2 hours ago');
  });

  it('should return "just now" for timestamps less than a second ago', () => {
    const now = Math.floor(Date.now() / 1000);
    expect(pipe.transform(now)).toBe('just now');
    expect(pipe.transform(now + 1)).toBe('just now'); // future timestamp treated as now
  });

  it('should return correct time ago for a number input', () => {
    const now = Math.floor(Date.now() / 1000);
    const tenSecondsAgo = now - 10;
    expect(pipe.transform(tenSecondsAgo)).toBe('10 seconds ago');
  });

  
});
