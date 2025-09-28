import { StorageUnitsPipe } from './storage-units.pipe';

// used AI to generate test cases

describe('StorageUnitsPipe', () => {
  let pipe: StorageUnitsPipe;

  beforeEach(() => {
    pipe = new StorageUnitsPipe();
  });

  it('create an instance', () => {
    const pipe = new StorageUnitsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return bytes when value less than 1000', () => {
    expect(pipe.transform(500)).toBe('500b');
  });

  it('should return kilobytes when value less than 1,000,000', () => {
    expect(pipe.transform(1500)).toBe('1.500kb');
  });

  it('should return megabytes when value less than 1,000,000,000', () => {
    expect(pipe.transform(2_000_000)).toBe('2.000mb');
  });

  it('should return gigabytes when value less than 1,000,000,000,000', () => {
    expect(pipe.transform(3_000_000_000)).toBe('3.000gb');
  });

  it('should return terabytes when value less than 1,000,000,000,000,000', () => {
    expect(pipe.transform(4_000_000_000_000)).toBe('4.000tb');
  });

  it('should return petabytes when value less than 1,000,000,000,000,000,000', () => {
    expect(pipe.transform(5_000_000_000_000_000)).toBe('5.000pb');
  });

  it('should return exabytes when value less than 1e+21', () => {
    expect(pipe.transform(6_000_000_000_000_000_000)).toBe('6.000eb');
  });

  it('should return zettabytes when value less than 1e+24', () => {
    expect(pipe.transform(7_000_000_000_000_000_000_000)).toBe('7.000zb');
  });

  it('should return yottabytes when value less than 1e+27', () => {
    expect(pipe.transform(8_000_000_000_000_000_000_000_000)).toBe('8.000yb');
  });

  it('should return "Too Big" when value exceeds yottabytes', () => {
    expect(pipe.transform(9_000_000_000_000_000_000_000_000_000)).toBe('Too Big');
  });
});