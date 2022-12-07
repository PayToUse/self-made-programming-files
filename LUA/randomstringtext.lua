math.randomseed(os.time())
local str = ""
for i = 1, 16 do
    str = str .. string.char(math.random(97, 122))
end

print(str)
