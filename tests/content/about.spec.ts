import {
    helpPages,
    legalPages,
    workWithUsPages,
    whoWeArePages,
} from '../../src/config/content/about.data';
import { describeContentSection } from '../../src/fixtures/content-section';

describeContentSection('About / Legal', legalPages);
describeContentSection('About / Help', helpPages);
describeContentSection('About / Work with us', workWithUsPages);
describeContentSection('About / Who we are', whoWeArePages);
