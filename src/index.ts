
/**
 * 模块配置类
 */
export abstract class ModuleConfig {
    /**
     * 路径前缀
     */
    Prefix: string = "";
    /**
     * 数据库前缀
     */
    DBPrefix: string = "";
    /**
     * 控制器
     */
    Controllers: { [index: string]: Function } = {};
    /**
     * 数据库定义
     */
    Dbs: { [index: string]: Function } = {}
    /**
     * 关系结构定义
     */
    Relations: { [index: string]: Function } = {}
}