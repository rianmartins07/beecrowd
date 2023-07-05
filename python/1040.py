e = list(map(float, input().split(' ')))

n1 = e[0]*2
n2 = e[1]*3
n3 = e[2]*4
n4 = e[3]*1

media = (n1+n2+n3+n4)/10

print("Media: {:.1f}".format(media))
if media >= 7.0:
    print("Aluno aprovado.")
elif media < 5.0:
    print("Aluno reprovado.")
else:
    print("Aluno em exame.")
    n = float(input())
    print("Nota do exame: {:.1f}".format(n))
    media=(media+n)/2
    if media >= 5:
        print("Aluno aprovado.")
    else:
        print("Aluno reprovado.")
    print("Media final: {:.1f}".format(media))