import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity()
export class Entry {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    dateCreated: Date;

    @UpdateDateColumn()
    dateUpdated: Date;

    @Column({
        length: 30
    })
    firstName: string;

    @Column({
        length: 30
    })
    lastName: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column({
        length: 2
    })
    state: string;

    @Column({
        type: "mediumint"
    })
    zip: number;

    @Column({
        length: 80
    })
    country: string;

}
