export interface Dimensions {
    length: string;
    width: string;
    height: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    link: string;
}

export interface Collection {
    href: string;
}

export interface Dimensions {
    length: string;
    width: string;
    height: string;
}

interface Attribute {
    id: number;
    name: string;
    taxonomy: string;
    position: number;
    terms: any[];
    visible: boolean;
    variation: boolean;
    options: string[];
}

export interface Self {
    href: string;
}

export interface Image {
    id: number;
    src: string;
    thumbnail: string;
    srcset: string;
    sizes: string;
    name: string;
    alt: string;
}

export interface Prices {
    price: string;
    regular_price: string;
    sale_price: string,
    price_range: string;
    currency_code: string;
    currency_symbol: string;
    currency_minor_unit: number;
    currency_decimal_separator: string;
    currency_thousand_separator: string;
    currency_prefix: string;
    currency_suffix: string;
}

export interface Product {
    id: number;
    name: string;
    parent: number;
    slug: string;
    type: "simple" | "variable" | "grouped";
    variation: string;
    permalink: string;
    sku: string;
    short_description: string;
    description: string;
    date_created: Date;
    prices: Prices;
    price_html: string;
    average_rating: string;
    date_created_gmt: Date;
    date_modified: Date;
    date_modified_gmt: Date;
    status: string;
    catalog_visibility: string;
    featured: boolean;
    regular_price: string;
    sale_price: string;
    review_count: number;
    has_options: boolean;
    is_purchasable: boolean;
    is_in_stock: boolean;
    is_on_backorder: boolean;
    low_stock_remaining: null;
    sold_individually: boolean;
    add_to_cart: any;
    total_sales: number;
    virtual: boolean;
    downloadable: boolean;
    downloads: any[];
    download_limit: number;
    download_expiry: number;
    external_url: string;
    button_text: string;
    tax_status: string;
    tax_class: string;
    manage_stock: boolean;
    stock_quantity: null;
    weight: string;
    dimensions: Dimensions;
    shipping_required: boolean;
    shipping_taxable: boolean;
    shipping_class: string;
    shipping_class_id: number;
    reviews_allowed: boolean;
    related_ids: number[];
    upsell_ids: number[];
    cross_sell_ids: number[];
    parent_id: number;
    purchase_note: string;
    categories: Partial<Category>[];
    tags: any[];
    images: Image[];
    attributes: Attribute[];
    default_attributes: any[];
    variations: number[];
    extensions: any;
}