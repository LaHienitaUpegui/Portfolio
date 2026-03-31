function orderTechsByLength(techs: string[]): string[] {
    return techs.sort((a, b) => b.length - a.length);
}

export { orderTechsByLength };
