#include <stdio.h>

int main()
{

    long long int di, hi, mi, si;
    char s[6];
    scanf("%s %lld", s, &di);
    scanf("%lld : %lld : %lld", &hi, &mi, &si);

    long long int df, hf, mf, sf;
    char s2[6];
    scanf("%s %lld", s2, &df);
    scanf("%lld : %lld : %lld", &hf, &mf, &sf);

    long long int dr, hr, mr, sr;

    long long int ri, rf;
    ri = (di*24*60*60) + (hi*60*60) + (mi*60) + si;
    rf = (df*24*60*60) +(hf*60*60) + (mf*60) + sf;

    rf-=ri;
    dr = (int) (((rf/60)/60)/24);
    rf -= dr*24*60*60;
    hr = (int) ((rf/60)/60);
    rf -= hr*60*60;
    mr = (int) ((rf/60));
    rf -= mr*60;
    sr = rf;
    printf("%lld dia(s)\n", dr);
    printf("%lld hora(s)\n", hr);
    printf("%lld minuto(s)\n", mr);
    printf("%lld segundo(s)\n", sr);
}