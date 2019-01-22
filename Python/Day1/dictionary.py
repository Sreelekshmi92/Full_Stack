my_dict={}
my_dict={1:'apple',2:'ball'}
print(my_dict)

#dictionary with mixed keys
my_dict={'name':'John',1:[2,3,4]}
print(my_dict[1])

#using dict() function
my_dict=dict({1:'apple',2:'ball'})
print(my_dict[1])

my_dict={'name':'Anu','age':23}
print(my_dict['name'])
print(my_dict.get('age')) # accessing the element using get()