/*
 * Copyright 2017 Alexander Pustovalov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { createStructuredSelector } from 'reselect';

export const userAccountSelector = state => state.appContainer.userAccount;
export const projectPathsSelector = state => state.appContainer.paths;
export const versionSelector = state => state.appContainer.packageConfig.version;

export const modelSelector = createStructuredSelector({
    componentModel: state => state.appContainer
});

