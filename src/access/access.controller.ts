import { Controller } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { BaseController } from 'src/base-controller';
import { AccessService } from './access.service';

@Controller('access')
export class AccessController extends BaseController{
    constructor(private accessService: AccessService) {
        super()
    }

    
}
