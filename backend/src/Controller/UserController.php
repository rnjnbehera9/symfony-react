<?php
namespace App\Controller;


use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;

class UserController extends ApiController
{
    #[Route('/users', methods: "POST")]
    public function index(Request $request, UserRepository $uesrRepository, EntityManagerInterface $em)
    {
        $request = $this->transformJsonBody($request);
        
        if (! $request) {
            return $this->respondValidationError('Please provide a valid request!');
        }

        // validate the title
        if (! $request->get('email')) {
            return $this->respondValidationError('Please provide a email!');
        }
        $email = $request->get('email');
        $pass = $request->get('pass');
        $user = $uesrRepository->findOneByEmailIdAndPassword($email,$pass);
        return $this->respond($user);
    }

    
}