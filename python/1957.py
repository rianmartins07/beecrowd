def hex(number):
    dict_hex = "0123456789ABCDEF"
    if number == 0:
        return "0"
    hexadecimal = ""
    while number > 0:
        remaining = number % 16
        hexadecimal = dict_hex[remaining] + hexadecimal
        number //= 16
    return hexadecimal

if __name__ == "__main__":
    print(hex(int(input())))