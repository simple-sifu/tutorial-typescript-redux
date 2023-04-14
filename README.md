# tutorial-typescript-redux

# Redux Architecture
<img width="1090" alt="Repo Diagram" src="https://user-images.githubusercontent.com/36891099/232165646-95b06a39-29b4-41c3-8672-2a2f241bc6e7.png">

# Actions and Reducers
<img width="1057" alt="Actions and Reducers" src="https://user-images.githubusercontent.com/36891099/232165667-f42e181f-c29f-4e9e-b3ce-81da1c95d4a4.png">


In the upcoming lecture, we will be adding our searchRepositories action. You will likely see a TS error in the catch block that says Object is of type 'unknown'

There are two ways that you can resolve this for now:

Option #1

    } catch (err: any) {
Option #2

...
 
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }
...
