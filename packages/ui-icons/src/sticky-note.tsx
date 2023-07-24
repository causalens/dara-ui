import { faStickyNote } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StickyNote icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StickyNote = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStickyNote} {...props} />;
};

export default StickyNote;
