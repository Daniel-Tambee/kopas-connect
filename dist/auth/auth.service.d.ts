import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './login.dto';
import { CreateUserDto } from '../user/create-user.dto';
import { PrismaService } from 'src/db-service.service';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<{
        access_token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    validateUser(userId: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        callUpNumber: string;
        stateCode: string;
        platoonId: number;
        groupId: number;
        createdAt: Date;
    }>;
    private generateToken;
}
