import { faLaughWink } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LaughWink icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LaughWink = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLaughWink} {...props} />;
};

export default LaughWink;
