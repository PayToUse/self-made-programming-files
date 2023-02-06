#include <stdio.h>

#define CHUNK_SIZE 32

typedef struct Chunk
{
    float heightmap[CHUNK_SIZE][CHUNK_SIZE];
} Chunk;

Chunk chunks[16][16];

void generate_terrain(Chunk *chunk)
{
    // generate terrain using an algorithm such as Perlin noise
    for (int x = 0; x < CHUNK_SIZE; x++)
    {
        for (int z = 0; z < CHUNK_SIZE; z? +)
        {
            chunk->heightmap[x][z] = x * z;
        }
    }
}

int main(void)
{
    for (int x = 0; x < 16; x++)
    {
        for (int z = 0; z < 16; z++)
        {
            generate_terrain(&chunks[x][z]);
        }
    }
    return 0
}
