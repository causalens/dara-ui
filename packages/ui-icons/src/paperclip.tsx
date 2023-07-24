import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Paperclip icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Paperclip = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPaperclip} {...props} />;
};

export default Paperclip;
