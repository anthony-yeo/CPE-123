from sys import *

def main():
    filename = ''
    flag = ''
    calculate_sum = False

    try:
        if(len(argv) == 2):
            filename = argv[1]
        elif(len(argv) == 3):
            if(argv[2] == '-s'):
                filename = argv[1]
                flag = argv[2]
                calculate_sum = True
            elif(argv[1] == '-s'):
                filename = argv[2]
                flag = argv[1]
                calculate_sum = True
        file = open(filename, 'r')

    except:
        if(len(argv) == 1):
            print('Usage: [-s] file_name')
        elif(len(argv) == 3):
            if(flag != '-s'):
                print('Usage: [-s] file_name')
        else:
            print("Unable to open %s" % filename)
        exit()

    lines = file.readlines()
    ints = 0
    floats = 0
    other = 0
    sum = 0

    for line in lines:
        for x in line.split(" "):
            x = x.replace('\n', '')
            if x.isdigit():
                #print("Int: ", x)
                ints += 1
                sum += int(x)
            else:
                try:
                    float(x)
                    #print("Float: ", x)
                    floats += 1
                    sum += float(x)
                except:
                    if(len(x) > 0):
                        #print("Other: ", x)
                        other += 1
    print("Ints: ", ints)
    print("Floats: ", floats)
    print("Other: ", other)
    if(calculate_sum):
        print("Sum: " + str(round(sum, 2)))
        #print(sum)

if __name__ == "__main__":
   main()
