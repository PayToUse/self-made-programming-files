=begin
This was plainly made in ruby.
=end

def generateIP()
    net1 = rand(1..255)
    net2 = rand(1..255)
    host = rand(1..255)
    subNet = rand(1..255)
    ip = "#{net1}.#{net2}.#{host}.#{subNet}"
    return ip
end

def getIP()
    ip = "here are the generated ip addresses: #{generateIP()}, #{generateIP()}, #{generateIP()}, #{generateIP()}, #{generateIP()}, and #{generateIP()}. please note that it may or may not be accurate"
    return ip
end
