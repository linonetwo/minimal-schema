declare module 'simple-json-schema-deref' {
    type Deref = (schema: Record<string, unknown>) => Record<string, unknown>;
    const deref: Deref
    export = deref
}
