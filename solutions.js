return numbers.filter((n) => n >= 5);

return numbers.map((n) => '' + n);

return persons.map((p) => p.name);

return persons.filter(p => p.age >= 18).map(p => p.name);

return songs.filter(s => s.artist === artistName).map(s => s.song);
