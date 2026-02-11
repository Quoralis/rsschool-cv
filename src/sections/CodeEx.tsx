export function CodeExample() {
  return (
    <section id="code" className="mb-8">
      <h2>Code Example</h2>
      <p className="mb-4 italic text-gray-600">Roman Numerals Converter (Codewars solution):</p>

      <pre className="relative group">
        <code className="block">
{`class RomanNumerals {
  static romanObj = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100,
    XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
  };

  static toRoman(num) {
    let romStr = '';
    for (const syb in RomanNumerals.romanObj) {
      let base = Math.floor(num / RomanNumerals.romanObj[syb]);
      if (base > 0) {
        romStr += syb.repeat(base);
        num %= RomanNumerals.romanObj[syb];
      }
    }
    return romStr;
  }

  static fromRoman(str) {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
      const curr = this.romanObj[str[i]];
      const next = this.romanObj[str[i + 1]];
      (curr >= next || !next) ? res += curr : res -= curr;
    }
    return res;
  }
}`}
        </code>
      </pre>
    </section>
  );
}