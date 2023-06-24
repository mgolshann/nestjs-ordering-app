import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { IUser } from './interfaces/IUser';
import { CurrentUser } from './decorators/current-user.decorator';
import { Response } from 'express';
import { MessagePattern } from '@nestjs/microservices';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async generateToken(
    @CurrentUser() user: IUser,
    @Res({ passthrough: true }) response: Response,
  ): Promise<void> {
    await this.authService.generateToken(user, response);
    response.send(user);
  }

  @Get('logout')
  logout(@Res({ passthrough: true }) response: Response) {
    return this.authService.logout(response)
  }
  
  @UseGuards(JwtAuthGuard)
  @MessagePattern('validate_user')
  async validateUser(@CurrentUser() user: IUser) {
    return user;
  }

  @Get('whoami')
  @UseGuards(JwtAuthGuard)
  async getCurrentUser(@CurrentUser() user: IUser) {
    return user;
  }
}
