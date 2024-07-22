import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ParejasModule } from './parejas/parejas.module';
import { CanchasModule } from './canchas/canchas.module';
import { PartidosModule } from './partidos/partidos.module';
import { GrupoModule } from './grupo/grupo.module';
import { AmericanoModule } from './americano/americano.module';
import { FaseModule } from './fase/fase.module';
import { CanchaDisponibleModule } from './cancha-disponible/cancha-disponible.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT')),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService]
    }),
    UserModule,
    ParejasModule,
    CanchasModule,
    PartidosModule,
    GrupoModule,
    AmericanoModule,
    FaseModule,
    CanchaDisponibleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
