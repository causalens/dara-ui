import { faBookJournalWhills } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BookJournalWhills icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BookJournalWhills = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBookJournalWhills} {...props} />;
};

export default BookJournalWhills;
