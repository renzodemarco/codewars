// Given an array of integers, return a new array with each value doubled.

// My Solution:

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/csharp

public class Kata
{
  public static int[] Maps(int[] x)
  {
    int[] res = new int[x.Length];
    for (int i = 0; i < x.Length; i++) {
      res[i] = x[i] * 2;
    }
    return res;
  }
}