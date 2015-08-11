# my_friends = ['R', 'A', 'P', 'H', 'A']
# def method(list_of_friends)
#   return  "Hi there, these are my friends: " + list_of_friends.join(', ')
# end
#
# puts method(my_friends).reverse

# foo = 0
# bar = '0'
# (foo == bar) ? (puts 'true'): (puts 'false')

students = ['Suzy', 'Daniel', 'James', 'Mary', 'Phillip', 'Siegfried']
a_array = []
students.each do |name|
  if name['a']
    name = 'A+' + name
    a_array.push name
  else
    a_array.push name
  end
end

puts a_array
