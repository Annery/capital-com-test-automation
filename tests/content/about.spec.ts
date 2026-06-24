import { helpPages, legalPages } from '../../src/config/content/about.data';
import { describeContentSection } from '../../src/fixtures/content-section';

describeContentSection('About / Legal', legalPages);
describeContentSection('About / Help', helpPages);
