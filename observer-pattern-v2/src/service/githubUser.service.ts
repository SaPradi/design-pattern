import api from "../lib/axios"

import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';
import { GitHubUser } from "../interfaces";



class GitHubService {
    private searchSubject: BehaviorSubject<string>;

    constructor() {
        this.searchSubject = new BehaviorSubject<string>('');
    }

    public searchUsers(query: string): Observable<{ users: GitHubUser[], isLoading: boolean }> {
        this.searchSubject.next(query);
        return this.searchSubject.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            switchMap(term => this.fetchUsers(term).pipe(
                startWith({ users: [], isLoading: true })
            ))
        );
    }

    private fetchUsers(term: string): Observable<{ users: GitHubUser[], isLoading: boolean }> {
        if (term.trim() === '') {
            return new Observable<{ users: GitHubUser[], isLoading: boolean }>(observer => {
                observer.next({ users: [], isLoading: false });
                observer.complete();
            });
        }

        return new Observable<{ users: GitHubUser[], isLoading: boolean }>(observer => {
            api.get(`/search/users?q=${term}`)
                .then(response => {
                    observer.next({ users: response.data.items, isLoading: false });
                    observer.complete();
                })
                .catch(error => observer.error(error));
        });
    }
}


export const githubService = new GitHubService();