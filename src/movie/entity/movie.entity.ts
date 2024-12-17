import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,} from "typeorm";
import { MovieDetail } from "./movie-detail";
import { BaseTable } from "./dase-table.entity";

@Entity()
export class Movie extends BaseTable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    genre: string;

    @OneToOne(
        ()=> MovieDetail,
    )
    @JoinColumn()
    detail: MovieDetail;
}