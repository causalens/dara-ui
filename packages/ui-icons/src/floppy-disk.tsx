import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FloppyDisk icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FloppyDisk = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFloppyDisk} {...props} />;
};

export default FloppyDisk;
