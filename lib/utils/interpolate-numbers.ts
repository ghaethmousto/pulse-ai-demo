// Walks the rendered string and replaces ASCII or Arabic-Indic digits with a
// linearly interpolated "from zero" value driven by `progress` ∈ [0, 1].
// Preserves all non-digit characters (currency symbols, %, separators, etc.)
// so formatting is reproduced exactly at the end of the animation.
const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

export function interpolateNumbers(value: string, progress: number): string {
  if (progress >= 1) return value;
  return value.replace(/[0-9٠-٩]+(?:[.,٫][0-9٠-٩]+)?/g, (match) => {
    const isArabic = /[٠-٩]/.test(match);
    const ascii = isArabic
      ? match
          .replace(/[٠-٩]/g, (d) => ARABIC_DIGITS.indexOf(d).toString())
          .replace("٫", ".")
      : match.replace(",", ".");
    const num = parseFloat(ascii);
    if (Number.isNaN(num)) return match;
    const interp = num * progress;
    const decimals = (ascii.split(".")[1] ?? "").length;
    const out =
      decimals > 0 ? interp.toFixed(decimals) : Math.round(interp).toString();
    if (isArabic) {
      return out
        .replace(/[0-9]/g, (d) => ARABIC_DIGITS[parseInt(d, 10)])
        .replace(".", "٫");
    }
    return out;
  });
}
