import { Controller, Get, Post, Body, Patch, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PatchProductDto } from './dto/patch-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.create(createProductDto);
    }

    @Get()
    findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Product> {
        return this.productsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.update(id, updateProductDto);
    }


    @Patch(':id')
    patch(@Param('id') id: number, @Body() patchProductDto: PatchProductDto): Promise<Product> {
        return this.productsService.patch(id, patchProductDto);
    }


    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.productsService.remove(id);
    }
}
