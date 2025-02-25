import { TranslationMessages } from 'ra-core';

const dutchMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: 'Voeg filter toe',
            add: 'Toevoegen',
            back: 'Ga terug',
            bulk_actions: '1 geselecteerd |||| %{smart_count} geselecteerd',
            cancel: 'Annuleren',
            clear_input_value: 'Veld wissen',
            clone: 'Klonen',
            confirm: 'Bevestigen',
            create: 'Toevoegen',
            create_item: '%{item} toevoegen',
            delete: 'Verwijderen',
            edit: 'Bewerken',
            export: 'Exporteer',
            list: 'Lijst',
            refresh: 'Verversen',
            remove_filter: 'Filter verwijderen',
            remove: 'Verwijderen',
            save: 'Opslaan',
            search: 'Zoeken',
            show: 'Tonen',
            sort: 'Sorteren',
            undo: 'Ongedaan maken',
            unselect: 'Deselecteren',
            expand: 'Uitklappen',
            close: 'Sluiten',
            open_menu: 'Menu openen',
            close_menu: 'Menu sluiten',
            update: 'Update',
        },
        boolean: {
            true: 'Ja',
            false: 'Nee',
            null: '',
        },
        page: {
            create: '%{name} toevoegen',
            dashboard: 'Dashboard',
            edit: '%{name} #%{id}',
            error: 'Er is iets misgegaan',
            list: '%{name}',
            loading: 'Aan het laden',
            not_found: 'Niet gevonden',
            show: '%{name} #%{id}',
            empty: 'Nog geen %{name}.',
            invite: 'Wilt u er een toevoegen?',
        },
        input: {
            file: {
                upload_several:
                    'Drag en drop bestanden om te uploaden, of klik om bestanden te selecteren.',
                upload_single: 'Drag en drop een bestand om te uploaden, of klik om een bestand te selecteren.',
            },
            image: {
                upload_several:
                    'Drag en drop afbeeldingen om te uploaden, of klik om bestanden te selecteren.',
                upload_single:
                    'Drag en drop een afbeelding om te uploaden, of klik om een bestand te selecteren.',
            },
            references: {
                all_missing: 'De gerefereerde elementen konden niet gevonden worden.',
                many_missing:
                    'Een of meer van de gerefereerde elementen is niet meer beschikbaar.',
                single_missing:
                    'Een van de gerefereerde elementen is niet meer beschikbaar',
            },
            password: {
                toggle_visible: 'Wachtwoord verbergen',
                toggle_hidden: 'Wachtwoord tonen',
            },
        },
        message: {
            about: 'Over',
            are_you_sure: 'Weet u het zeker?',
            bulk_delete_content:
                'Weet u zeker dat u dit %{name} item wilt verwijderen? |||| Weet u zeker dat u deze %{smart_count} items wilt verwijderen?',
            bulk_delete_title:
                'Verwijder %{name} |||| Verwijder %{smart_count} %{name}',
            bulk_update_content:
                'Weet u zeker dat u dit %{name} wilt updaten? |||| Weet u zeker dat u deze %{smart_count} items wilt updaten?',
            bulk_update_title:
                'Update %{name} |||| Update %{smart_count} %{name}',
            delete_content: 'Weet u zeker dat u dit item wilt verwijderen?',
            delete_title: '%{name} #%{id} verwijderen',
            details: 'Details',
            error:
                'Er is een clientfout opgetreden en uw aanvraag kon niet worden voltooid.',
            invalid_form: 'Het formulier is ongeldig. Controleer a.u.b. de foutmeldingen',
            loading: 'De pagina is aan het laden, een moment a.u.b.',
            no: 'Nee',
            not_found:
                'U heeft een verkeerde URL ingevoerd of een defecte link aangeklikt.',
            yes: 'Ja',
            unsaved_changes:
                'Sommige van uw wijzigingen zijn niet opgeslagen. Weet u zeker dat u ze wilt negeren?',
        },
        sort: {
            sort_by: 'Sorteren op %{field} %{order}',
            ASC: 'oplopend',
            DESC: 'aflopend',
        },
        navigation: {
            no_results: 'Geen resultaten gevonden',
            no_more_results:
                'Pagina %{page} ligt buiten het bereik. Probeer de vorige pagina.',
            page_out_of_boundaries: 'Paginanummer %{page} buiten bereik',
            page_out_from_end: 'Laatste pagina',
            page_out_from_begin: 'Eerste pagina',
            page_range_info: '%{offsetBegin}-%{offsetEnd} van %{total}',
            page_rows_per_page: 'Rijen per pagina:',
            next: 'Volgende',
            prev: 'Vorige',
            skip_nav: 'Doorgaan naar artikel',
        },
        auth: {
            auth_check_error: 'Log in om door te gaan',
            user_menu: 'Profiel',
            username: 'Gebruikersnaam',
            password: 'Wachtwoord',
            sign_in: 'Inloggen',
            sign_in_error: 'Authenticatie mislukt, probeer opnieuw a.u.b.',
            logout: 'Uitloggen',
        },
        notification: {
            updated: 'Element bijgewerkt |||| %{smart_count} elementen bijgewerkt',
            created: 'Element toegevoegd',
            deleted: 'Element verwijderd |||| %{smart_count} elementen verwijderd',
            bad_item: 'Incorrect element',
            item_doesnt_exist: 'Element bestaat niet',
            http_error: 'Server communicatie fout',
            data_provider_error:
                'dataProvider fout. Open console voor meer details.',
            i18n_error:
                'Kan de vertalingen voor de opgegeven taal niet laden',
            canceled: 'Actie geannuleerd',
            logged_out: 'Uw sessie is beëindigd, maak opnieuw verbinding.',
            not_authorized: 'U heeft geen toegang tot deze bron.',
        },
        validation: {
            required: 'Verplicht',
            minLength: 'Moet minimaal %{min} karakters bevatten',
            maxLength: 'Mag hooguit %{max} karakters bevatten',
            minValue: 'Moet groter of gelijk zijn aan %{min}',
            maxValue: 'Moet kleiner of gelijk zijn aan %{max}',
            number: 'Moet een getal zijn',
            email: 'Moet een geldig e-mailadres zijn',
            oneOf: 'Moet een zijn van: %{options}',
            regex: 'Moet overeenkomen met een specifiek format (regexp): %{pattern}',
        },
    },
};

export default dutchMessages;
