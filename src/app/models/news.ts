export const NewsCategories = ["business", "entertainment", "health", "science", "sports", "technology"]

export const NewSortKeys = ["relevancy", "popularity", "publishedAt"];

export const NewsCountries = [
    { name: 'Argentina', iso: 'ar' },
    { name: 'Australia', iso: 'au' },
    { name: 'Austria', iso: 'at' },
    { name: 'Belgium', iso: 'be' },
    { name: 'Brazil', iso: 'br' },
    { name: 'Bulgaria', iso: 'bg' },
    { name: 'Canada', iso: 'ca' },
    { name: 'China', iso: 'cn' },
    { name: 'Colombia', iso: 'co' },
    { name: 'Egypt', iso: 'eg' },
    { name: 'France', iso: 'fr' },
    { name: 'Germany', iso: 'de' },
    { name: 'Greece', iso: 'gr' },
    { name: 'Hong Kong', iso: 'hk' },
    { name: 'Hungary', iso: 'hu' },
    { name: 'India', iso: 'in' },
    { name: 'Indonesia', iso: 'id' },
    { name: 'Ireland', iso: 'ie' },
    { name: 'Israel', iso: 'il' },
    { name: 'Italy', iso: 'it' },
    { name: 'Japan', iso: 'jp' },
    { name: 'Latvia', iso: 'lv' },
    { name: 'Lithuania', iso: 'lt' },
    { name: 'Malaysia', iso: 'my' },
    { name: 'Mexico', iso: 'mx' },
    { name: 'Morocco', iso: 'ma' },
    { name: 'Netherlands', iso: 'nl' },
    { name: 'New Zealand', iso: 'nz' },
    { name: 'Nigeria', iso: 'ng' },
    { name: 'Norway', iso: 'no' },
    { name: 'Philippines', iso: 'ph' },
    { name: 'Poland', iso: 'pl' },
    { name: 'Portugal', iso: 'pt' },
    { name: 'Romania', iso: 'ro' },
    { name: 'Saudi Arabia', iso: 'sa' },
    { name: 'Serbia', iso: 'rs' },
    { name: 'Singapore', iso: 'sg' },
    { name: 'Slovakia', iso: 'sk' },
    { name: 'Slovenia', iso: 'si' },
    { name: 'South Africa', iso: 'za' },
    { name: 'Sweden', iso: 'se' },
    { name: 'Switzerland', iso: 'ch' },
    { name: 'Thailand', iso: 'th' },
    { name: 'Turkey', iso: 'tr' },
    { name: 'United Arab Emirates', iso: 'ae' },
    { name: 'Ukraine', iso: 'ua' },
    { name: 'United Kingdom', iso: 'gb' },
    { name: 'United States', iso: 'us' },
    { name: 'Czech Republic', iso: 'cz' },
    { name: 'South Korea', iso: 'kr' },
    { name: 'Taiwan', iso: 'tw' },
    { name: 'Venuzuela', iso: 've' }
]

export const NewsLanguage = [
    { name: 'English', iso: 'en'},
    { name: 'Arabic', iso: 'ar'},
    { name: 'French', iso: 'fr'},
    { name: 'German', iso: 'de'},
    { name: 'Spanish', iso: 'es'},
    { name: 'Hebrew', iso: 'he'},
    { name: 'Italian ', iso: 'it'},
    { name: 'Dutch', iso: 'nl'},
    { name: 'Norwegian', iso: 'no'},
    { name: 'Portugese', iso: 'pt'},
    { name: 'Russian', iso: 'ru'},
    { name: 'Swedish', iso: 'sv'},
    { name: 'Chinese', iso: 'zh'}
]

export interface Article {
    author?: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content?: string,
    source: string
}

export interface NewsSource {
    id?: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string
}