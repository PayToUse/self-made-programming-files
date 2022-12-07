import java.util.Random

fun randomStringGenerator(length: Int): String {
    val allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    return (1..length)
        .map { allowedChars.random() }
        .joinToString("")
}

fun main(args: Array<String>) {
    val length = 8
    println("Random string of length $length is: ${randomStringGenerator(length)}")
}
