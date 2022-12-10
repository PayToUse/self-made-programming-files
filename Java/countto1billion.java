public class Main {
  public static void main(String[] args) {
    long start = System.nanoTime(); // start time

    // loop from 1 to 1 billion
    for (long i = 1; i <= 1000000000; i++) {
      // do nothing, just count
    }

    long end = System.nanoTime(); // end time
    long elapsedTime = end - start; // elapsed time in nanoseconds
    double seconds = (double) elapsedTime / 1000000000.0; // convert to seconds

    System.out.println("Elapsed time: " + seconds + " seconds");
  }
}
