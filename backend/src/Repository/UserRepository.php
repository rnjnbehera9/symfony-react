<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<User>
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }


    public function findOneByEmailIdAndPassword($email,$pass)
    {
        $entityManager = $this->getEntityManager();

        return $entityManager->createQuery(
                                'SELECT u
                                FROM App\Entity\User u
                                WHERE u.email = :email
                                AND u.password = :pass'
                            )
                            ->setParameter('email', array('email' => $email))
                            ->setParameter('pass', array('pass' => $pass))
                            ->getArrayResult();
            
    }
}
