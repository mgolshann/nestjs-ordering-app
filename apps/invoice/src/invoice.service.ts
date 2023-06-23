import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class InvoiceService {

  private readonly logger = new Logger(InvoiceService.name)
  
  getHello(): string {
    return 'Hello World!';
  }

  async invoice(data: any) {
    this.logger.log('invoice ...', data)
    console.log('your order has been saved...')
  }
  
}
