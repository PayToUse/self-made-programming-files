public class Chunk {
    private final int CHUNK_SIZE = 32;
    private float[][] heightmap = new float[CHUNK_SIZE][CHUNK_SIZE];
    
    public Chunk() {
        generateTerrain();
    }
    
    private void generateTerrain() {
        // generate terrain using an algorithm such as Perlin noise
        for (int x = 0; x < CHUNK_SIZE; x++) {
            for (int z = 0; z < CHUNK_SIZE; z++) {
                heightmap[x][z] = x * z;
            }
        }
    }
}

public class world {
    private final int CHUNK_COUNT = 16;
    private Chunk[][] chunks = new Chunk[CHUNK_COUNT][CHUNK_COUNT];
    
    public World() {
        generateTerrain();
    }
    
    private void generateTerrain() {
        for (int x = 0; x < CHUNK_COUNT; x++) {
            for (int z = 0; x < CHUNK_COUNT; z++) {
                chunks[x][z] = new Chunk();
            }
        }
    }
}

public class Main {
    public static void main(String[] args)
    World world = new World();
} 
