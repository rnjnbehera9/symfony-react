<?php
namespace App\Tests\Entity;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    public function testUser()
    {
        $user = new User();
        $user->setEmail('abc@gmail.com');
        $user->setUserName('dad');

        $this->assertEquals('abc@gmail.com', $user->getEmail());
        $this->assertEquals('dad', $user->getUserName());
    }
}
