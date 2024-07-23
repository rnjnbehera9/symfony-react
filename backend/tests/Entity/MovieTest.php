<?php
namespace App\Tests\Entity;

use App\Entity\Movie;
use PHPUnit\Framework\TestCase;

class MovieTest extends TestCase
{
    public function testMovie()
    {
        $movie = new Movie();
        $movie->setTitle('Test Movie');
        $movie->setCount(1);

        $this->assertEquals('Test Movie', $movie->getTitle());
        $this->assertEquals(1, $movie->getCount());
    }
}
