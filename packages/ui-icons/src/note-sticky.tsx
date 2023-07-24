import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * NoteSticky icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const NoteSticky = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faNoteSticky} {...props} />;
};

export default NoteSticky;
