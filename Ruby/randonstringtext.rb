def random_string
  (0...8).map { (65 + rand(26)).chr }.join
end

puts random_string
