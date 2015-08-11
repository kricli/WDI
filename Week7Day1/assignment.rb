@students = []
def new_student(first_name, last_name, age, course)
  @students.push({
    first_name: first_name,
    last_name:  last_name,
    age:        age,
    course:     course
  })
end
new_student('Terrence', 'Lun', 24, 'WDI')
new_student('Terrence', 'Lun', 24, 'WDI')
new_student('Terrence', 'Lun', 24, 'WDI')
new_student('Terrence', 'Lun', 24, 'WDI')
new_student('Terrence', 'Lun', 24, 'WDI')



students = @students
# puts students

def puts_students(list_of_students)
  list_of_students.sort_by { |k| k["value"] }
  list_of_students.each do |student|
    puts "#{student[:first_name]}, #{student[:last_name]} - #{student[:course]}"
  end
end

puts_students(students)
