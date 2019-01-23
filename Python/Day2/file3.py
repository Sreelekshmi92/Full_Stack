myfile=open("fruits.txt")
content=myfile.read()
print(content)
myfile.close()
content=content.splitlines()
for i in content:
    print(len(i))