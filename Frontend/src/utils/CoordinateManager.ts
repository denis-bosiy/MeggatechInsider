import { EnglishAlphabet } from "../core/Schedule/EnglishAlphabet";
import { Workday } from "../core/Schedule/Workday";

export class CoordinateManager {
  public static GetEnglishLetterFromWorkday(workday: Workday): EnglishAlphabet {
    switch (workday) {
      case Workday.Monday:
        return EnglishAlphabet.A;
      case Workday.Tuesday:
        return EnglishAlphabet.B;
      case Workday.Wednesday:
        return EnglishAlphabet.C;
      case Workday.Thursday:
        return EnglishAlphabet.D;
      case Workday.Friday:
        return EnglishAlphabet.E;
      default:
        return EnglishAlphabet.Unknown;
    }
  }

  public static GetEnglishLetterFromIndex(index: number): EnglishAlphabet {
    switch (index + 1) {
      case 1:
        return EnglishAlphabet.A;
      case 2:
        return EnglishAlphabet.B;
      case 3:
        return EnglishAlphabet.C;
      case 4:
        return EnglishAlphabet.D;
      case 5:
        return EnglishAlphabet.E;
      case 6:
        return EnglishAlphabet.F;
      case 7:
        return EnglishAlphabet.G;
      case 8:
        return EnglishAlphabet.H;
      case 9:
        return EnglishAlphabet.I;
      case 10:
        return EnglishAlphabet.J;
      case 11:
        return EnglishAlphabet.K;
      case 12:
        return EnglishAlphabet.L;
      case 13:
        return EnglishAlphabet.M;
      case 14:
        return EnglishAlphabet.N;
      case 15:
        return EnglishAlphabet.O;
      case 16:
        return EnglishAlphabet.P;
      case 17:
        return EnglishAlphabet.Q;
      case 18:
        return EnglishAlphabet.R;
      case 19:
        return EnglishAlphabet.S;
      case 20:
        return EnglishAlphabet.T;
      case 21:
        return EnglishAlphabet.U;
      case 22:
        return EnglishAlphabet.V;
      case 23:
        return EnglishAlphabet.W;
      case 24:
        return EnglishAlphabet.X;
      case 25:
        return EnglishAlphabet.Y;
      case 26:
        return EnglishAlphabet.Z;
      default:
        return EnglishAlphabet.Unknown;
    }
  }

  public static GetIndexFromEnglishLetter(letter: EnglishAlphabet): number {
    switch (letter) {
      case EnglishAlphabet.A:
        return 0;
      case EnglishAlphabet.B:
        return 1;
      case EnglishAlphabet.C:
        return 2;
      case EnglishAlphabet.D:
        return 3;
      case EnglishAlphabet.E:
        return 4;
      case EnglishAlphabet.F:
        return 5;
      case EnglishAlphabet.G:
        return 6;
      case EnglishAlphabet.H:
        return 7;
      case EnglishAlphabet.I:
        return 8;
      case EnglishAlphabet.J:
        return 9;
      case EnglishAlphabet.K:
        return 10;
      case EnglishAlphabet.L:
        return 11;
      case EnglishAlphabet.M:
        return 12;
      case EnglishAlphabet.N:
        return 13;
      case EnglishAlphabet.O:
        return 14;
      case EnglishAlphabet.P:
        return 15;
      case EnglishAlphabet.Q:
        return 16;
      case EnglishAlphabet.R:
        return 17;
      case EnglishAlphabet.S:
        return 18;
      case EnglishAlphabet.T:
        return 19;
      case EnglishAlphabet.U:
        return 20;
      case EnglishAlphabet.V:
        return 21;
      case EnglishAlphabet.W:
        return 22;
      case EnglishAlphabet.X:
        return 23;
      case EnglishAlphabet.Y:
        return 24;
      case EnglishAlphabet.Z:
        return 25;
      default:
        return 26;
    }
  }
}
