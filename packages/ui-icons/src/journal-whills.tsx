import { faJournalWhills } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * JournalWhills icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const JournalWhills = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faJournalWhills} {...props} />;
};

export default JournalWhills;
