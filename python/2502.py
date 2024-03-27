import sys
while True:
    try:
        c, n = list(map(int, input().split()))

        first = [*str(input()).upper()]
        second = [*str(input()).upper()]


        alpha1 = dict()
        alpha2 = dict()
        for i in range(c): alpha1[second[i]] = first[i]

        for i in range(c): alpha2[first[i]] = second[i]


        def func (ol , l ): 
            return l.upper() if ol.isupper() else l.lower()

        for i in range(n):
            s = [*str(input())]
            new = []
            for j in range(len(s)):
                if str(s[j]).upper() in alpha1:
                    new.append(func(s[j], alpha1[s[j].upper()]))
                elif str(s[j]).upper() in alpha2:
                    new.append(func(s[j], alpha2[s[j].upper()]))
                else:
                    new.append(s[j])
            print("".join(new))
        print()
    except EOFError:
        sys.exit()