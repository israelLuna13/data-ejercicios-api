import { Table, Column, DataType, Model, PrimaryKey} from "sequelize-typescript";
@Table({
    tableName:'gold_product_performace_ranking',
    timestamps:false,
})

class ProductPerformaceRanking extends Model{
    @PrimaryKey
@Column({
    type:DataType.STRING
})
declare product_type: string

@Column({
    type:DataType.FLOAT
})
declare sales: number

@Column({
    type:DataType.FLOAT
})
declare total_returns: number

@Column({
    type:DataType.FLOAT
})
declare eficiencia: number

@Column({
    type:DataType.INTEGER
})
declare rank_ventas: number
@Column({
    type:DataType.INTEGER
})
declare rank_eficiencia: number

@Column({
    type:DataType.INTEGER
})
declare rank_devoluciones: number
}

 export default ProductPerformaceRanking